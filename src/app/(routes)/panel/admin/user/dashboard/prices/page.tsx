import { FetchCourses } from '@/components/FetchCourses/FetchCourses'
import React, { Suspense } from 'react'
import Loading from './loading'

function PricesDashboarPage() {
  return (
    <div className="flex flex-col w-full h-screen gap-8 pb-24">
      <h2 className="mt-10 text-cyan-800 text-lg border-dotted border-b border-cyan-800 w-fit">
        Listado de cursos 📝
      </h2>

      <Suspense fallback={<Loading/>}>
        <FetchCourses/>
      </Suspense>
    </div>
  )
}

export default PricesDashboarPage
