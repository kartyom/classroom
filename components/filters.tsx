import styles from "@/styles/Home.module.css";

export function Filters() {
  return (
    <header className={styles.header}>
      <h1>Classrooms: Beta</h1>
      <div className={styles.options}>
        <input type="text" />
        <select name="days" id="days">
          <option value="day">Day</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wendsday">Wednesday</option>
          <option value="thusday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
        <select name="TimeFrom" id="TimeFrom">
          <option value="timeFrom">Time From</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
        </select>
        <select name="TimeTo" id="TimeTo">
          <option value="timeTo">Time To</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
        </select>
        <button type="button" className={styles.search}>Search</button>
        <button type="button" className={styles.availability}>See Availability</button>
        <button type="button" className={styles.reset}>Reset Filters</button>
      </div>
    </header>
  );
}
