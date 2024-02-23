import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { getEntityByAttribute } from '@teleporthq/cms-mappers/caisy'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Direct Markets Director</title>
          <meta
            property="og:title"
            content="test-page - Direct Markets Director"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_6icos8) => (
            <>
              <h1 id={context_6icos8?.id}>Heading</h1>
            </>
          )}
          initialData={props.context6icos8Prop}
          persistDataDuringLoading={true}
          key={props?.context6icos8Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context6icos8Prop = await getEntityByAttribute({
      ...context?.params,
      projectId: '3bd8eb33-2aaa-4620-87bf-d7ccd04d0245',
      query:
        'query MyQuery{TypeWithRichText{_meta{createdAt updatedAt id}title content{json connections{__typename  }}}}',
      attribute: 'id',
      id: '2',
    })
    return {
      props: {
        context6icos8Prop: context6icos8Prop?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
