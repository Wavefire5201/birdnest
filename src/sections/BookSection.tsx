import Image from "next/image";
import aiweiwei from "@/assets/images/ai-weiwei.jpg";

export default function BookSection() {
  return (
    <div className="p-10">
      <div className="text-3xl">
        1000 Years of Joys and Sorrows: A Memoir by Ai Weiwei, translated by
        Allan H. Barr
      </div>
      <div className="flex pt-6">
        <div className=" pr-4">
          <li className="list-disc">
            The stadium&apos;s design was inspired by Chinese ceramics and was
            conceived to represent democracy and transparency, with its exposed
            structure symbolizing the openness that Ai Weiwei hoped would emerge
            in Chinese society.
          </li>
          <li className="list-disc">
            Despite helping design this iconic Olympic venue, Ai Weiwei did not
            attend the 2008 Olympics opening ceremony in the stadium he helped
            create, as he had become increasingly critical of how the Games were
            being used as propaganda rather than as a true opening of Chinese
            society.
          </li>
          <li className="list-disc">
            In his memoir, Ai Weiwei has distanced himself from the Bird&apos;s
            Nest project, viewing it as part of what he calls China&apos;s
            &quot;pretend smile&quot; and stating he has &quot;no feelings&quot;
            about its continued use, acknowledging that once created, they
            &quot;can do whatever they want with it&quot;.
          </li>
        </div>
        <div>
          <Image src={aiweiwei} alt="Ai Weiwei" layout="responsive" />
          <div className="text-right text-sm">
            <a
              href="https://the-talks.com/interview/ai-weiwei/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-green-800"
            >
              Mike Marsland
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
