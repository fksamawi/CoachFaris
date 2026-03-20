import Image from "next/image";

export function ProfileAvatar() {
  return (
    <div className="flex justify-center">
      <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-[hsl(147,22%,92%)] shadow-sm">
        <Image
          src="/CoachFaris.jpg"
          alt="Coach Faris — Executive leadership coach"
          fill
          className="object-cover"
          priority
          sizes="128px"
        />
      </div>
    </div>
  );
}
