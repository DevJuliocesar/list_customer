import React, { useEffect, useState } from 'react';
import {
  Layout, Menu, Breadcrumb, Table, Space, InputNumber, Input, Form, Typography, Popconfirm,
} from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import request from '../../utils/request';
import { BASE_URL, Endpoints } from '../../constants';

const { Header, Content, Footer } = Layout;

const SiteLayoutContent = styled.div`
    min-height: 280px;
    padding: 24px;
    background: #fff;`;

interface IUser {
  id: number
  name: string
  age: number
  birthDate: Date
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: IUser;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const ListCustomer = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState<IUser[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editingKey, setEditingKey] = useState(0);

  const isEditing = (record: IUser) => record.id === editingKey;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result: IUser[] = await request(BASE_URL + Endpoints.LIST_USERS);
        setData(result);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const cancel = () => {
    setEditingKey(0);
  };

  const edit = (record: Partial<IUser> & { id: React.Key }) => {
    form.setFieldsValue({
      name: '', age: '', birthDate: '', ...record,
    });
    setEditingKey(record.id);
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      editable: true,
      render: (name: string, record: IUser) => (
        <Link to={{
          pathname: `/${record.id}`,
        }}
        >
          {name}
        </Link>
      ),
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
      editable: true,
    },
    {
      title: 'Fecha de Nacimiento',
      dataIndex: 'birthDate',
      key: 'birthDate',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: IUser) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm title="Estas seguro de cancelar" onConfirm={cancel}>
              Cancelar
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== 0} onClick={() => edit(record)}>
            Editar
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: IUser) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="2">Usuarios</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Usuarios</Breadcrumb.Item>
        </Breadcrumb>
        <SiteLayoutContent>
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              rowClassName="editable-row"
              columns={mergedColumns}
              dataSource={data}
            />
          </Form>
        </SiteLayoutContent>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        DeveloperJulioCesar®
      </Footer>
    </Layout>
  );
};

export default ListCustomer;
