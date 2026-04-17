import { projects } from "@/data";
import { FaFilePdf, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import ProjectAnimations from "@/components/ProjectAnimations"; 

type Props = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="min-h-screen bg-black flex items-center justify-center text-white font-mono uppercase">Error // Project_Not_Found</div>;

  return (
    <main className="min-h-screen bg-[#050505] text-white py-20 px-6 lg:px-20 overflow-x-hidden">
      {/* This component runs the GSAP code to make opacity-0 become opacity-100 */}
      <ProjectAnimations />

      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <Link href="/" className="back-button opacity-0 inline-flex items-center gap-2 text-zinc-500 hover:text-orange-500 transition-colors mb-20 font-mono text-xs uppercase tracking-widest">
          <FaArrowLeft /> Return_to_Base
        </Link>

        {/* Header */}
        <header className="mb-32">
          <span className="project-id opacity-0 translate-y-4 text-orange-500 font-mono text-sm tracking-[0.5em] mb-4 block">
            PROJECT_ID // {project.id}
          </span>
          <h1 className="project-title opacity-0 translate-y-10 text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            {project.title}
          </h1>
        </header>

        {/* Categories Grid */}
        <div className="space-y-40">
          {project.category.map((cat, i) => (
            <section key={i} className="cat-section opacity-0 translate-y-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-4 lg:sticky lg:top-10 h-fit">
                <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6 border-b border-zinc-900 pb-4">
                  {cat.name}
                </h2>
                
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest block mb-4">Technical_Drawings:</span>
                  {cat.pdf.map((file, idx) => (
                    <a 
                      key={idx} 
                      href={file} 
                      target="_blank"
                      className="flex items-center justify-between p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl hover:border-orange-500/50 group transition-all"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <FaFilePdf className="text-zinc-700 group-hover:text-orange-500 transition-colors" />
                        <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-200 truncate">
                          {file.split('/').pop()}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-orange-500 opacity-0 group-hover:opacity-100 uppercase">Open</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 bg-zinc-900/10 border border-zinc-900 p-8 lg:p-16 rounded-[3rem]">
                <p className="text-zinc-300 text-lg lg:text-xl font-light leading-relaxed first-letter:text-5xl first-letter:text-orange-500 first-letter:font-black first-letter:mr-3">
                  {cat.description}
                </p>
              </div>

            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;