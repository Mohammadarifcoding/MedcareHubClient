import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Salesproduct extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  state = {
    data: [
      {
        ProName: 'med',
        price:2000,
        username:'tarin',
        email:'a@gmail.com',
        salesitem:2
       
      },
      {
        ProName: 'med',
        price:2000,
        uv: 4000,
        username:'tarin',
        email:'a@gmail.com',
        salesitem:6
       
      },
      {
        ProName: 'med',
        price:2000,
        uv: 4000,
        username:'tarin',
        email:'a@gmail.com',
        salesitem:8
       
      
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <div style={{ width: '100%' }}>
      
        <ResponsiveContainer width="100%" height={200}>
          <BarChart width={250} height={170} data={data}>
            <Bar dataKey="salesitem" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      
      </div>
    );
  }
}
