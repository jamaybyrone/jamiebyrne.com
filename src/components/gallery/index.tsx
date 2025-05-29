'use client'

import { CategoryRow, OrientationRow } from './rows'
import Items from './lightbox'

import Container from '@mui/material/Container'
import { imageType } from '@/shared/types'
import useGalleryFilters from '@/hooks/useGalleryFilter'

interface galleryProp {
  items: imageType[]
}

function Gallery({ items }: Readonly<galleryProp>) {
  const {
    data,
    filteredCat,
    filteredOrin,
    filterCategory,
    filterOrientation,
    categoryDataSet,
    orientationDataSet
  } = useGalleryFilters({ items })

  return (
    <Container maxWidth={false} disableGutters>
      <CategoryRow
        filterCategory={filterCategory}
        data={categoryDataSet}
        currentSelected={filteredCat}
      />
      <OrientationRow
        filterOrientation={filterOrientation}
        data={orientationDataSet}
        currentSelected={filteredOrin}
      />
      <Items data={data} />
    </Container>
  )
}

export default Gallery
