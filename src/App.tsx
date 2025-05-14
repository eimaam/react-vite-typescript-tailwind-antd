import React, { Suspense, use } from 'react';
import { ConfigProvider, Typography, List } from 'antd';
import { Card, CardContent, CardMeta } from './components/ui/Card';
import { Layout, LayoutContext } from './components/layout/Layout';

const { Title, Paragraph, Text } = Typography;

const FooterStatus = () => {
  
  const { showFooter } = use(LayoutContext);
  
  if (!showFooter) {
    return null;
  }
  
  return (
    <div className="mt-4 text-xs text-primary-500 dark:text-light-400 text-center">
      Footer is visible
    </div>
  );
};


const demoDataPromise = Promise.resolve([
  'React 19 features',
  'TypeScript integration',
  'Modern component patterns'
]);


const FeatureList = ({ dataPromise }: { dataPromise: Promise<string[]> }) => {
  
  const features = use(dataPromise);
  
  return (
    <List
      className="mt-4"
      size="small"
      bordered
      dataSource={features}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

function App() {
  const theme = {
    token: {
      colorPrimary: '#6C5CE7',
      colorSuccess: '#10B981',
      colorWarning: '#F59E0B',
      colorError: '#EF4444',
      colorInfo: '#6C5CE7',
      fontFamily: 'Inter, sans-serif',
      borderRadius: 8,
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout title="React 19 TypeScript Tailwind Template">
        <Card 
          animate 
          className="max-w-4xl mx-auto"
          title={<Title level={4}>React (Vite) Template - eimaam.dev</Title>}
        >
          <CardMeta 
            title="React 19 (Vite) + TypeScript +Ant Design + TailwindCSS + Framer Motion"
            description="A clean starting point with the latest React features"
          />
          
          <CardContent className="mt-6">
            <Paragraph className="text-primary-700 dark:text-light-300">
              This template includes:
            </Paragraph>
            
            <List
              size="small"
              className="mt-2"
              dataSource={[
                'React 19 + TypeScript',
                'Vite for fast development',
                'TailwindCSS for styling',
                'Framer Motion for animations',
                'Ant Design components',
                'Dark mode support',
                'UI component library with customized styling'
              ]}
              renderItem={(item) => (
                <List.Item className="text-primary-600 dark:text-light-400">
                  {item}
                </List.Item>
              )}
            />
            
            <Paragraph className="mt-4 text-primary-700 dark:text-light-300">
              New React 19 features demo:
            </Paragraph>
            
            <Suspense fallback={<div className="mt-4 text-center">Loading features...</div>}>
              <FeatureList dataPromise={demoDataPromise} />
            </Suspense>
            
            <FooterStatus />
          </CardContent>
        </Card>
      </Layout>
    </ConfigProvider>
  );
}

export default App;