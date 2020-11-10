import Link from 'next/link';
import style from '../static/Style';

const h1 = {
  fontSize: '72pt',
  fontWeight: 'bold',
  textAlign: 'right',
  letterSpacing: '-8px',
  color: '#f0f0f0',
  margin: '-40px 0px'
}


const p = {
  margin: '0px',
  color: '#066',
  fontSize: '16pt'
}

export default () => <div>
  {style}
  <h1>Next.js</h1>
  <p>Welcome to next.js!</p>
  <hr />
  <div>
    <Link href="/other">
      <button>Go to Other page &gt;&gt;</button>
    </Link>
  </div>
</div>
