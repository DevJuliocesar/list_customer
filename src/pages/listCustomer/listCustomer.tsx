import React, { useEffect, useState } from 'react';
import {
  Layout, Menu, Breadcrumb, List, Avatar, Table, Space,
} from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import request from '../../utils/request';

const { Header, Content, Footer } = Layout;

const SiteLayoutContent = styled.div`
    min-height: 280px;
    padding: 24px;
    background: #fff;`;

interface IUser {
  identificacion: number
  nombre: string
  edad: number
  fechaNacimiento: Date
}

const ListCustomer = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    'https://my-json-server.typicode.com/devjuliocesar/list_customer/users',
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result: IUser[] = await request(url);
        setData(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <Link to="/about">{text}</Link>,
    },
    {
      title: 'Identificacion',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Edad',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Fecha de Nacimiento',
      dataIndex: 'birthDate',
      key: 'birthDate',
    },
    {
      title: 'Opciones',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <Link to="/about">
            Editar
            {' '}
            {record.name}
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">Usuarios</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Usuarios</Breadcrumb.Item>
          <Breadcrumb.Item>Lista</Breadcrumb.Item>
        </Breadcrumb>
        <SiteLayoutContent>
          <Table columns={columns} dataSource={data} />
        </SiteLayoutContent>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        DeveloperJulioCesar®
      </Footer>
    </Layout>
  );
};

export default ListCustomer;
