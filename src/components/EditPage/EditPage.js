import Edit_Query from "./Edit_Query";
import EditSide from "./Edit_side";
import './EditPage.css'

function EditPage() {
    return (
      <div className='querypage'>
        <EditSide/>
        <Edit_Query/>
      </div>
    )
  }
  
  export default EditPage