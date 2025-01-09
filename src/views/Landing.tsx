import { FC } from "hono/jsx"

import { Layout } from "../components/Layout"
import { Welcome } from "../components/Welcome"

export const Landing:FC = () => {
  return (
        <Layout title="Quick Stack">
          <Welcome />
        </Layout>,
  )
}