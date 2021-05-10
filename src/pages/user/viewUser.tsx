import {
  Breadcrumb, Card, Layout, Menu,
} from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  EditOutlined, EllipsisOutlined, LeftOutlined, SettingOutlined,
} from '@ant-design/icons';
import request from '../../utils/request';
import { BASE_URL, Endpoints } from '../../constants';

const SiteLayoutContent = styled.div`
    min-height: 280px;
    padding: 24px;
    background: #fff;`;

interface IUser {
  id: number
  name: string
  age: number
  birthDate?: Date
}

const ViewUser = () => {
  const { id }: any = useParams();
  const [data, setData] = useState<IUser>({
    id: 0,
    name: '',
    birthDate: undefined,
    age: 0,
  });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      console.log(id);

      setIsError(false);
      setIsLoading(true);
      try {
        const result: any = await request(`${BASE_URL + Endpoints.LIST_USERS}/${id}`);
        setData(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to="/"><LeftOutlined /></Link></Menu.Item>
          <Menu.Item key="2">Usuarios</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/">Usuarios</Link></Breadcrumb.Item>
          <Breadcrumb.Item>{data.name}</Breadcrumb.Item>
        </Breadcrumb>
        <SiteLayoutContent>
          <Card
            title={data.name}
            style={{ width: 300 }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <p>
              Identificación
              {' '}
              {data.id}
            </p>
            <p>
              Edad
              {' '}
              {data.age}
            </p>
            <p>
              Fecha de Nacimiento
              {' '}
              {data.birthDate}
            </p>
          </Card>
        </SiteLayoutContent>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        DeveloperJulioCesar®
      </Footer>
    </Layout>
  );
};

export default ViewUser;
