import { ICoursesPrices } from '@/models/CoursesPrices'
import React from 'react'
import { FormEditCourseItem } from '../FormEditCourseItem/FormEditCourseItem'

export const EditCoursesPricesItem = (data: ICoursesPrices) => {
  return (
    <div className="mb-4">
      <FormEditCourseItem
        {...data}
      />
    </div>
  )
}
