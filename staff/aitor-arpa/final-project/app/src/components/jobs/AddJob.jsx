import addJob from "../../Img/addJob.png";
export default function AddJob() {
  return (
    <div>
      <form className="border_radius_medium">
        <div className="gridTwo_reverse">
          <input className="borderDawn" type="hidden" name="jobId" />
          <label>Title :</label>
          <input className="borderDawn" type="text" name="title" />
          <label>Des. :</label>
          <input className="borderDawn" type="text" name="description" />
          <label>Add. :</label>
          <input className="borderDawn" type="text" name="address" />
          <label>Workers :</label>
          <input className="borderDawn" type="text" name="workers" />
          <button className="btn_small">
            <img src={addJob} alt=""></img>
          </button>
          <button className="btn_small"></button>
        </div>
      </form>
    </div>
  );
}
