import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const visitor = [
  {
    name: 'cus1',
    email:'a@gmail.com',
    amt: 1000,
  },
  {
    name: 'cus1',
    email:'a@gmail.com',
    amt: 2000,
  },

 
];

export default class Newvisitor extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-area-chart-kpg1s';

  render() {
    return (
      <div style={{ width: '100%' }}>
       
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={visitor}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      
      </div>
    );
  }
}
