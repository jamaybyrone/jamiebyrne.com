'use client'
import React, { ReactElement } from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { buttonSX } from '@/shared/style'

interface rowType {
  data: string[]
  currentSelected?: string
}

interface CategoryRowProp extends rowType {
  filterCategory: (param: string) => void
}
interface OrientationRowProp extends rowType {
  filterOrientation: (param: string) => void
}

function CategoryRow({
  filterCategory,
  data
}: Readonly<CategoryRowProp>): ReactElement {
  return (
    <Box textAlign="center">
      {data.map((category, index) => {
        if (data.length > 2 || index === 0) {
          return (
            <Button
              sx={buttonSX}
              onClick={() => filterCategory(category)}
              key={index + 'Category'}
            >
              {category}
            </Button>
          )
        }
      })}
    </Box>
  )
}

function OrientationRow({
  filterOrientation,
  data,
  currentSelected
}: Readonly<OrientationRowProp>): ReactElement {
  return (
    <Box textAlign="center">
      {data.length > 2 && (
        <Typography variant="body1" color="secondary">
          Filter by Orientation
        </Typography>
      )}
      {data.length > 2 &&
        data.map((orientation, index) => {
          if (currentSelected !== undefined || index !== 0) {
            return (
              <Button
                sx={buttonSX}
                onClick={() => filterOrientation(orientation)}
                key={index + 'Orientation'}
              >
                {orientation}
              </Button>
            )
          }
        })}
    </Box>
  )
}
export { CategoryRow, OrientationRow }
