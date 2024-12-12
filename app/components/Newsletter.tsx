import { Button } from "@/components/ui/button"

export default function CommunityButton() {
  return (
    <div className="max-w-xl mx-auto px-4 mt-[5px] text-center">
      <Button 
        className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 text-lg font-semibold rounded-full transition-colors duration-300"
        onClick={() => {
          window.open('https://t.me/WorkWorkWeb3', '_blank')
        }}
      >
        Join in Community
      </Button>
    </div>
  )
}

