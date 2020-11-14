import Link from 'next/link'
import Layout from '../components/Layout';
import Counter from "../components/Counter";

export default () => (
  <Layout header="other" title= "Other page.">
    <p>This is Other page.</p>
    <Counter />
    <hr />
    <div>
      <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </div>
  </Layout>
);
