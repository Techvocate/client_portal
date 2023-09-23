import Edit_Query from "./Edit_Query"
import Edit_Side from "./Edit_side"
import './EditPage.css'

function EditPage() {
    return (
      <div className='editpage'>
        <Edit_Side/>
        <Edit_Query/>
      </div>
    )
  }
  
  export default EditPage