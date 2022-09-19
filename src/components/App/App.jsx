import React from 'react'
import { Iron } from '../Hoc/IronComponent.jsx'
import { Gold } from '../Hoc/GoldComponent.jsx'

const iron = {
  text: 'Зо́лото — элемент 11 группы, шестого периода периодической системы химических элементов, с атомным номером 79. Простое вещество золото — благородный металл жёлтого цвета.',
};
const gold = {
  text: 'Желе́зо — химический элемент 8-й группы четвёртого периода периодической системы химических элементов Д. И. Менделеева с атомным номером 26.',
};

function App() {
  return (
    <div className='resources__conntainer'>
      <Iron title="Chart of Iron" formula="Fe" information={iron.text} />
      <Gold title="Chart of Gold" formula="Au" information={gold.text} />
    </div>
  )
}

export default App