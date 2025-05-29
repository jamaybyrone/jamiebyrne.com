'use client'

import { useState, useEffect } from 'react'
import { ImageGrid } from './ImageGrid'
import { ImageDialog } from './ImageDialog'
import { imageType } from '@/shared/types'

interface ItemsProps {
  data: imageType[]
}

export default function Items({ data }: Readonly<ItemsProps>) {
  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const image = data[currentImage]

  useEffect(() => {
    function handleKeydown({ key }: KeyboardEvent) {
      if (open) {
        if (key === 'ArrowLeft' && currentImage > 0) {
          setCurrentImage(currentImage - 1)
        }
        if (key === 'ArrowRight' && currentImage < data.length - 1) {
          setCurrentImage(currentImage + 1)
        }
        if (key === 'Escape') {
          setOpen(false)
          setCurrentImage(0)
        }
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [open, currentImage, data.length])

  const handleImageAndDialog = (index: number) => {
    setCurrentImage(index)
    setOpen(true)
  }

  return (
    <>
      <ImageDialog
        open={open}
        image={image}
        position={currentImage}
        totalImages={data.length}
        onClose={() => setOpen(false)}
        onPrev={() => setCurrentImage((prev) => prev - 1)}
        onNext={() => setCurrentImage((prev) => prev + 1)}

      />
      <ImageGrid
        data={data}
        handleImageAndDialog={handleImageAndDialog}
        quality={100}
      />
    </>
  )
}
