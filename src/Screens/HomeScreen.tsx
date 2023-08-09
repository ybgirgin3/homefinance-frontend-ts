import React, { Component } from 'react';
import { CRUD } from '../Components/CRUD';
import { ExpensesColumns } from '../Data/Expenses';
import {Table} from 'antd'

export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount(): Promise<void> {
    let response = await CRUD({
      url: 'http://localhost:3000/expenses/',
      method: 'get',
    });
    console.log('response in cmd', response)
    this.setState({ data: response });
  }

  render() {
    return (
      <div>
        <Table columns={ExpensesColumns} dataSource={this.state.data}/>
      </div>
    );
  }
}
