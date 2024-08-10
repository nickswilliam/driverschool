const Courses = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="flex flex-col w-full min-h-[768px]">
        {children}
    </main>
  )
}

export default Courses