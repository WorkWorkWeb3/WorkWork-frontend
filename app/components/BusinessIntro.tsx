import { Button } from "@/components/ui/button"
import { useLanguage } from '../contexts/LanguageContext'

const content = {
  en: {
    title: "Our Business",
    jobMatching: {
      title: "Web3 Job Matching",
      description: "Our AI matching system and professional HR & headhunting team ensure the perfect match between employers and job seekers.",
      button: "Learn More"
    },
    workerCommunity: {
      title: "Web3 Worker Community",
      description: "Share your work experience here, including salary information, interview experience sharing, work news information, asking all questions, etc.",
      button: "Join Community"
    },
    communityBuilding: {
      title: "Community Building",
      description: "Join our thriving community of Web3 professionals. Network, learn, and grow together in the rapidly evolving blockchain and cryptocurrency ecosystem.",
      button: "Join Now"
    }
  },
  zh: {
    title: "我们的业务",
    jobMatching: {
      title: "Web3 职位匹配",
      description: "我们的 AI 匹配系统和专业的人力资源与猎头团队确保雇主和求职者之间的完美匹配。",
      button: "了解更多"
    },
    workerCommunity: {
      title: "Web3 工作者社区",
      description: "在这里分享您的工作经验，包括薪资信息、面试经验分享、工作新闻信息、提问等。",
      button: "加入社区"
    },
    communityBuilding: {
      title: "社区建设",
      description: "加入我们蓬勃发展的 Web3 专业人士社区。在快速发展的区块链和加密货币生态系统中一起建立人脉、学习和成长。",
      button: "立即加入"
    }
  }
}

export default function BusinessIntro() {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-20 px-4 bg-[#000044]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-cyan-500">{content[language].title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['jobMatching', 'workerCommunity', 'communityBuilding'].map((section) => (
            <div key={section} className="bg-[#000033] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">{content[language][section].title}</h3>
              <p className="text-gray-300 mb-4">
                {content[language][section].description}
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
                {content[language][section].button}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

