import Image from "next/image";
import cardone from "../../public/cardone.svg";
import cardtwo from "../../public/cardtwo.svg";
import cardthree from "../../public/cardthree.svg";
import cardfour from "../../public/cardfour.svg";

export default function Product() {
  return (
    <section
      id="product"
      className="px-[20px] mt-[50px] scroll-mt-[120px] lg:scroll-mt-[10px] lg:mt-[15%] 2xl:mt-[30%] lg:w-screen lg:px-[5%] bg-[#FFFFFF]"
    >
      <p className="text-[40px] lg:text-[72px] font-[500px] lg:font-[600] text-[#101928] lg:pt-[10%]">
        The Product
      </p>
      <p className="text-[14px] lg:text-[20px] font-[400] text-[#3D3D3D] mt-[10px]">
        Monitor your Lightning node with confidence.
      </p>

      <div className="mt-[40px] flex flex-col gap-[30px] lg:gap-[50px] lg:grid lg:grid-cols-2 lg:px-[5%]">
        <div className="border-[1px] border-[#D4D4D4] rounded-[12px] flex flex-col px-[20px] py-[30px]">
          <div>
            <p className="text-[18px] lg:text-[26px] font-[500] lg:font-[600]">
              Channels
            </p>
            <p className="text-[13px] lg:text-[20px] lg:w-[85%] fomt-[300] mt-[10px]">
              Monitor every channel&apos;s health, balances, and uptime with
              clear insights and visual liquidity breakdowns.
            </p>
          </div>

          <div className="flex justify-end items-end mt-[30px] ">
            <Image src={cardone} alt="cardone" className="lg:w-[80px]" />
          </div>
        </div>

        <div className="border-[1px] border-[#D4D4D4] rounded-[12px] flex flex-col px-[20px] py-[30px]">
          <div>
            <p className="text-[18px] lg:text-[26px] font-[500] lg:font-[600]">
              All Nodes
            </p>
            <p className="text-[13px] lg:text-[20px] lg:w-[85%] fomt-[300] mt-[10px]">
              Visualize your node&apos;s performance, logs, liquidity, uptime,
              and peers with advanced metrics like betweenness centrality.
            </p>
          </div>

          <div className="flex justify-end items-end mt-[30px] ">
            <Image src={cardtwo} alt="cardtwo" className="lg:w-[80px]" />
          </div>
        </div>

        <div className="border-[1px] border-[#D4D4D4] rounded-[12px] flex flex-col px-[20px] py-[30px]">
          <div>
            <p className="text-[18px] lg:text-[26px] font-[500] lg:font-[600]">
              Events
            </p>
            <p className="text-[13px] lg:text-[20px] lg:w-[85%] fomt-[300] mt-[10px]">
              Stay in control with real-time alerts. Configure notifications for
              payments, channel changes, or node states via webhooks.
            </p>
          </div>

          <div className="flex justify-end items-end mt-[30px] ">
            <Image src={cardthree} alt="cardthree" className="lg:w-[80px]" />
          </div>
        </div>

        <div className="border-[1px] border-[#D4D4D4] rounded-[12px] flex flex-col px-[20px] py-[30px]">
          <div>
            <p className="text-[18px] lg:text-[26px] font-[500] lg:font-[600]">
              Payment
            </p>
            <p className="text-[13px] lg:text-[20px] lg:w-[85%] fomt-[300] mt-[10px]">
              Track invoices and payments incoming, outgoing, or forwarded with
              powerful filters and clear visualizations of activity across your
              node.
            </p>
          </div>

          <div className="flex justify-end items-end mt-[30px] ">
            <Image src={cardfour} alt="cardfour" className="lg:w-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
