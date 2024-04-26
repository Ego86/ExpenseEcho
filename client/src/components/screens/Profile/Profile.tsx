import Text from "@/components/UI/Text/Text"
import Image from "next/image"
import avatar from "@/../../assets/1667929102152124336.jpg"

const ProfilePage = () => {
  return (
    <div className="flex">
      <Image
        src={avatar}
        className="rounded-[50%] [&>img]:rounded-[50%]"
        width={50}
        // height={10}
        alt="avatar"
      />
      <div>
        <Text type="h1" className="text-2xl">
          name
        </Text>
        <Text type="h2" className="text-slate-300">
          email
        </Text>
      </div>
    </div>
  )
}
export default ProfilePage
