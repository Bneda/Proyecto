import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker,SingleDatePicker} from 'react-dates';

class Schedule extends React.Component{
  state={startDate: null, endDate: null, agregarDias: false}

toggleAgregarDias = () =>
  this.setState(({ agregarDias }) => ({ agregarDias: !agregarDias }));

//this contains the value of our date 
  alertStartDate=()=>{
    alert(this.state.startDate)
  }
//this contains the value of one! date selected
  alertDate=()=>{
    alert(this.state.date)
  }

AgregarDia=()=>{
  return(
    <div>
      <label className="ui small header">Ingresa el día: </label>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        />
        <div className="ui form">
            <form className="fields">
            <div className="field">
              <label>Hora </label>
              <input type="number" placeholder="Hora" min="0" max="23"/>
            </div>
            <div className="field">
              <label>Minutos </label>
              <input type="number" placeholder="Minutos" min="0" max="59"/>
            </div>
            <div className="field">
              <label>Cupos disponibles </label>
              <input type="number" placeholder="Cupos disponibles" min="0" max="40"/>
            </div>
            </form>
          </div>
    </div>
  )
}

  render(){
    const {agregarDias}=this.state
    //console.log(this.state.startDate);
    return(
      <div className="ui segment">
        <div className="ui large header"> 
          Programar Horarios 
        </div>
        <br/>
        <p>A continuación puedes programar las fechas en las que estará disponible la experiencia 
          <br/>Selecciona el rango de fehcas seguido por los días y horas en que se brindará la experiencia.
          <br/>También asigna cupos para que se generen
        </p> 
        <div className="ui placeholder segment" >
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        <div className="button"  >
          <button className= "ui red basic button">Registra Horario</button>
        </div>
        </div>
        <button className= "ui red basic button" onClick={this.toggleAgregarDias}>Agregar día</button>
        {agregarDias && this.AgregarDia()}
          
      </div>
    )
  }
}

export default Schedule;