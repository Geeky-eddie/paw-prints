let data = {
  "AK": 23.8,
  "AL": 28.8,
  "AR": 27.1,
  "AZ": 28.3,
  "CA": 37.1,
  "CO": 28.43,
  "CT": 30.79,
  "DC": 32.75,
  "DE": 30.4,
  "FL": 23.8,
  "GA": 29.55,
  "HI": 31.05,
  "IA": 32.33,
  "ID": 30.725,
  "IL": 28.75,
  "IN": 27.03,
  "KS": 29.5,
  "KY": 28.8,
  "LA": 29.8,
  "MA": 28.8,
  "MD": 29.55,
  "ME": 30.95,
  "MI": 28.05,
  "MN": 33.65,
  "MO": 29.2,
  "MS": 28.8,
  "MT": 28.7,
  "NC": 29.05,
  "ND": 25.54,
  "NE": 30.64,
  "NH": 23.8,
  "NJ": 34.55,
  "NM": 28.7,
  "NV": 23.8,
  "NY": 32.6,
  "OH": 28.597,
  "OK": 28.8,
  "OR": 33.7,
  "PA": 26.87,
  "RI": 29.79,
  "SC": 27.72,
  "SD": 23.8,
  "TN": 23.8,
  "TX": 23.8,
  "UT": 28.75,
  "VA": 29.55,
  "VT": 32.55,
  "WA": 23.8,
  "WI": 29.15,
  "WV": 30.3,
  "WY": 23.8
}

const converToCurrency = (arg) => parseFloat(arg).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00', '');

const handleChange = () => {
  let value = document.getElementById('inpVal')?.value
  const state = document.getElementById('state')?.value
  value = value.replace('$', '').replace(' ', '')
  if (value && state) {
    const dataValue = data[state]
    let calVal = ''
    if (dataValue) {
      calVal = (dataValue * value) / 100
    }
    document.getElementById('ans').innerHTML = converToCurrency(Math.round(calVal))
  }
  if (value) {
    value = converToCurrency(value)
  }
  document.getElementById('inpVal').value = `$${value}`
  const stateVal = document.getElementById('state')
  document.getElementById('stateVal').innerHTML = stateVal.options[stateVal.selectedIndex].text.replace(state + ' - ', '')
}

handleChange()

