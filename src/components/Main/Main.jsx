import css from "./Main.module.css";
import mainImg from "../../img/image24_1x.jpg";
import mainImg_2x from "../../img/image24_2x.jpg";

const Main = () => {
  return (
    <main className={css.main}>
      <section className={css.section}>
        <p className={css.textLink}>
          Cryptocurrencies {">"} bitcoin {">"}{" "}
          <span className={css.span}>News</span>
        </p>
        <h1 className={css.title}>
          The Scalability Solution: Understanding Layer One vs. Layer Two
          Blockchains
        </h1>
        <p className={css.subheader}>20 Sep 2023, 8:00pm</p>
        <p>by Alex House</p>
      </section>

      <picture>
        <source srcSet={`${mainImg}, ${mainImg_2x} 2x`} />
        <img src={`${mainImg}`} alt="main image" width={670} />
      </picture>

      <article className={css.article}>
        <p>
          Layer one or L1 refers to a base blockchain protocol like Bitcoin or
          Ethereum. These networks operate on a decentralized ledger secured by
          proof-of-work (PoW) mining or proof-of-stake (PoS) staking. L1 chains
          such as Bitcoin and Ethereum offer unparalleled security. However,
          during peak times, both of these chains grapple with sluggish
          transaction speeds and steep fees.
        </p>{" "}
        <br />
        <p>
          {" "}
          Developers from several L1 networks are working to improve layer one
          scaling through methods like increasing block size, sharding, and
          introducing proof-of-stake consensus. However, substantial layer one
          upgrades require coordination among node operators and can take years
          to implement. Some blockchains intend to use L2 protocols as either a
          temporary or long-term solution.
        </p>
        <br />
        <p>
          Bitcoin’s Lightning Network (LN) is a second-layer scaling solution
          designed to facilitate faster, low-cost transactions on the Bitcoin
          blockchain (L1). It operates on top of Bitcoin’s base layer, allowing
          for instant payments by circumventing the need for block
          confirmations.
        </p>
        <br />
        <p>
          Transactions on the Lightning Network occur off-chain in payment
          channels between users. Only channel open and close transactions are
          recorded on the Bitcoin blockchain. Participants can transact multiple
          times within these channels, reducing congestion and fees on L1.
        </p>
        <br />
        <p>
          Critics target LN for its prevalent use of custodial wallets, as these
          demand users place trust in third parties to handle their money.
          Moreover, the off-chain method poses a risk: if nodes lack proper
          backup, it could trigger an irrevocable loss of funds.
        </p>{" "}
        <br />
        <p>
          Loopring uses zero-knowledge rollups (ZK-rollups) to batch hundreds of
          transactions off-chain and generate a cryptographic proof verifying
          their validity. This proof is submitted to layer one (Ethereum),
          avoiding the need to process each transaction on-chain.
        </p>{" "}
        <br />
        <p>
          Polygon ZKEVM also uses ZK-rollup technology to offer high throughput
          Ethereum transactions with lower fees. On the risk side, some believe
          that relying heavily on ZK-rollups can introduce centralization risks
          as validators and sequencers become key to the system.
        </p>
      </article>
    </main>
  );
};

export default Main;
