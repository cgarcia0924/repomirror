import React from 'react';
import { FormControl } from 'react-bootstrap';
import moment from 'moment-timezone';
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker';

class Fechas extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    //let start = moment(new Date(2021, 10, 20, 0, 0, 0, 0));
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start).add(25, 'days').subtract(1, 'second');
    this.state = {
      start: start,
      end: end,
      timezone: 'America/Bogota',
      secondDisplay: true,
      finicio: '',
      ffin: '',
      message: '',
    };

    this.onClick = this.onClick.bind(this);
    this.applyCallback = this.applyCallback.bind(this);
    // this.applyCallbackJ = this.applyCallbackJ.bind(this);
  }

  applyCallback(startDate, endDate) {
    //console.log("Apply Callback");
    // console.log(startDate.format("DD-MM-YYYY HH:mm"));
    // console.log(endDate.format("DD-MM-YYYY HH:mm"));
    this.setState({
      start: startDate,
      end: endDate,
    });
    this.props.sendData(this.state);
  }

  /*
  applyCallbackJ(startDate, endDate) {
    
    console.log("Apply Callback Job");
    console.log("INICIO Java: "+ startDate.format("DD-MM-YYYY HH:mm"));
    console.log("FIN java: "+ endDate.format("DD-MM-YYYY HH:mm"));
    this.setState({
      start: startDate,
      end: endDate
    });
    this.props.sendDataJ(this.state);

  }
*/
  rangeCallback(index, value) {
    console.log(index, value);
  }

  onClick() {
    let newStart = moment(this.state.start).subtract(3, 'days');
    // console.log("On Click Callback");
    // console.log(newStart.format("DD-MM-YYYY HH:mm"));
    this.setState({ start: newStart });
  }

  ////////////////////////////////////////////////////////

  renderPickerAutoApplySmartModeDisabled(
    ranges,
    local,
    maxDate,
    descendingYears
  ) {
    let value = `${this.state.start.format('DD-MM-YYYY HH:mm ')}`; //-${this.state.end.format("DD-MM-YYYY HH:mm ZZ")}`;
    return (
      <div
        id="DateTimeRangeContainerSmartModeDisabled"
        style={{ textAlign: '-webkit-center' }}
      >
        <br />
        <DateTimeRangeContainer
          ranges={ranges}
          start={this.state.start}
          end={this.state.end}
          local={local}
          maxDate={maxDate}
          applyCallback={this.applyCallback}
          rangeCallback={this.rangeCallback}
          autoApply
          descendingYears={descendingYears}
          years={[2018, 2030]}
          style={{ width: '350px' }}
        >
          <FormControl
            id="formControlsTextB"
            type="text"
            label="Text"
            placeholder="Enter text"
            style={{ cursor: 'pointer', fontSize: '15px', width: '350px' }}
            value={value}
          />
        </DateTimeRangeContainer>

        <br />
      </div>
    );
  }

  renderPickerAutoApplySmartModeDisabledSecondsIncluded(
    ranges,
    local,
    maxDate,
    descendingYears
  ) {
    let value = `${this.state.start.format(
      'DD-MM-YYYY HH:mm:ss ZZ'
    )} - ${this.state.end.format('DD-MM-YYYY HH:mm:ss ZZ')}`;
    local = {
      format: 'DD-MM-YYYY HH:mm:ss ZZ',
      sundayFirst: false,
    };
    return (
      <div id="DateTimeRangeContainerSeconds">
        <br />
        <DateTimeRangeContainer
          ranges={ranges}
          start={this.state.start}
          end={this.state.end}
          local={local}
          maxDate={maxDate}
          applyCallback={this.applyCallback}
          rangeCallback={this.rangeCallback}
          autoApply
          descendingYears={descendingYears}
          years={[2020, 2030]}
          style={{ width: '350px' }}
        >
          <FormControl
            id="formControlsTextB"
            type="text"
            label="Text"
            placeholder="Enter text"
            style={{ cursor: 'pointer' }}
            disabled
            value={value}
          />
        </DateTimeRangeContainer>
        <div onClick={this.onClick}>
          Click Me to test the Date Picker with Auto Apply and Seconds local
          format
        </div>
        <br />
      </div>
    );
  }

  render() {
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
    );
    let end = moment(start).add(1, 'days').subtract(1, 'seconds');
    let ranges = {
      'Día actual': [moment(start), moment(end)],
      Ayer: [
        moment(start).subtract(1, 'days'),
        moment(end).subtract(1, 'days'),
      ],
      '1 Semana': [moment(start).subtract(7, 'days'), moment(end)],
      '2 Semanas': [moment(start).subtract(14, 'days'), moment(end)],
      '1 Mes': [moment(start).subtract(1, 'months'), moment(end)],
    };
    let local = {
      format: 'DD-MM-YYYY HH:mm',
      sundayFirst: false,
    };
    let maxDate = moment(end).add(24, 'hour');

    return (
      <div className="container">
        <h5>Rango Fecha</h5>
        {this.renderPickerAutoApplySmartModeDisabled(
          ranges,
          local,
          maxDate,
          true
        )}
      </div>
    );
  }
}
export default Fechas;
