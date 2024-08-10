
interface MailsParamsType {
  id: number,
}

function EmailID({params}: {params: MailsParamsType}) {
  return (
    <div className="h-screen">
      Email id: <strong>{params.id}</strong>
     

    </div>
  )
}

export default EmailID
