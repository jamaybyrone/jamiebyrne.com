import { useState, useMemo } from 'react'
import { imageType } from '@/shared/types'

interface UseGalleryFiltersProps {
  items: imageType[]
}

interface UseGalleryFiltersReturn {
  data: imageType[]
  filteredCat: string | undefined
  filteredOrin: string | undefined
  filterCategory: (category: string) => void
  filterOrientation: (orientation: string) => void
  categoryDataSet: string[]
  orientationDataSet: string[]
}

function useGalleryFilters({
  items
}: UseGalleryFiltersProps): UseGalleryFiltersReturn {
  const [data, setData] = useState<imageType[]>(items)
  const [currentData, setCurrentData] = useState<imageType[]>(items)
  const [filteredCat, setFilteredCat] = useState<string | undefined>(undefined)
  const [filteredOrin, setFilteredOrin] = useState<string | undefined>(
    undefined
  )

  const categoryDataSet = useMemo(() => {
    const categoryData: string[] = []
    items.forEach((value) => {
      value.category.forEach((category) => {
        categoryData.push(category)
      })
    })
    return ['all', ...new Set(categoryData)]
  }, [items])

  const orientationDataSet = useMemo(() => {
    const orientationData = new Set(items.map((value) => value.orientation))
    return ['both', ...Array.from(orientationData)]
  }, [items])

  const filterCategory = (category: string) => {
    if (category === 'all') {
      setData(items)
      setFilteredCat('all')
      setCurrentData(items)
      setFilteredOrin(undefined)
      return
    }

    if (filteredCat !== category && filteredCat !== undefined) {
      setFilteredOrin(undefined)
      setCurrentData(items)
    }

    const filteredData = items.filter((value) =>
      value.category.includes(category)
    )

    setCurrentData(filteredData)
    setData(filteredData)
    setFilteredCat(category)
  }

  const filterOrientation = (orientation: string) => {
    if (orientation === 'both') {
      setData(currentData)
      setFilteredOrin('both')
      return
    }

    const filteredData = currentData.filter(
      (value) => value.orientation === orientation
    )
    setData(filteredData)
    setFilteredOrin(orientation)
  }

  return {
    data,
    filteredCat,
    filteredOrin,
    filterCategory,
    filterOrientation,
    categoryDataSet,
    orientationDataSet
  }
}

export default useGalleryFilters
