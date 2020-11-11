import Link from 'next/link'
import Layout from '../components/Layout';

export default () => (
  <Layout header="other" title= "Other page.">
    <p>This is Other page.</p>
    <hr />
    <div>
      <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </div>
  </Layout>
);
