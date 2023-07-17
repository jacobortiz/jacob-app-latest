import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech',
  description: "tech stuff.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        Tech
      </h1>
      <div className="prose prose-neutral dark:prose-invert">

        <h3 id="computer-office">Computer Setup</h3>
        <ul>
          <li>Intel Core i9-10850K</li>
          <li>Noctua NH-D15 chromomax cooler</li>
          <li>NVIDIA GeForce RTX 2080</li>
          <li>MSI MPG Z490 Gaming Carbon </li>
          <li>Corsair - Vengeance Pro 32 GB Memory</li>
          <li>Samsung SSD 970 EVO Plus</li>
          <li>Corsair - iCUE 7000X </li>
          <li>Seasonic GX-850 Gold Rated PSU</li>
        </ul>

        <h3>Accessories</h3>
        <ul>
          <li>38&quot; LG UltraGear</li>
          <li>27&quot; LG UltraGear 240hz</li>
          <li>Logitech G Pro X Superlight</li>
          <li>Glorious GMMK Pro  Keyboard</li>
          <li>Yamaha Speakers</li>
        </ul>

        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode
          </li>
          <li>Theme: One Dark Pro</li>
          <li>Terminal: zsh</li>
        </ul>

        {/* <h3 id="audio-video">Audio / Video</h3>
        <ul>
          <li>Sony A7III (28-50mm, 35mm f1.8)</li>
          <li>Shure SM7B + Elgato Wave XLR + Boom</li>
          <li>Elgato Camlink</li>
          <li>Logitech C920</li>
          <li>Elgato Key Light (x2)</li>
          <li>Elgato Master Mount</li>
          <li>Aputure Mark 2 120D II</li>
          <li>Aputure Light Dome II</li>
        </ul> */}

        <h3 id="music">Music</h3>
        <ul>
          <li>Yamaha P71 Piano</li>
        </ul>

        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>15&quot; Macbook Pro (2019)</li>
          <li>Apple Airpods Pro</li>
          <li>Apple Watch 5th Gen</li>
          <li>Apple iPhone 12 Pro Max</li>
          <li>PS5</li>
        </ul>
      </div>
    </section>
  );
}
