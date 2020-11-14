import Link from 'next/link';
import Layout from '../components/Layout';
import Image from "../static/imgComponents/Image";

export default () => (
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js!</p>
      <Image fname="logo_kintone_mark_rgb.png" size="250" />
    <hr/>
    <Link href="./other">
      <button> go to Other &gt;&gt;</button>
    </Link>
  </Layout>
);
