"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { useGLTF } from "@react-three/drei"
import { OBJLoader } from "three-stdlib"
import { useLoader } from "@react-three/fiber"
import { RingGeometry } from "three"

export function DynamicDog(props) {
  const { scene } = useGLTF("/dog.glb")

  return <primitive object={scene} {...props} />
}

export function TesterDynamic(props) {
  const obj = useLoader(OBJLoader, "tester2.obj")
  return <primitive object={obj} {...props} />
}

const Dog = dynamic(() => import("@/components/canvas/Examples").then((mod) => mod.Dog), { ssr: false })
const Tester = dynamic(() => import("@/components/canvas/Examples").then((mod) => mod.Tester), { ssr: false })

const View = dynamic(() => import("@/components/canvas/View").then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <svg className="-ml-1 mr-3 size-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import("@/components/canvas/View").then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <View orbit className="relative h-screen sm:w-full">
        <Suspense fallback={null}>
          <TesterDynamic scale={0.5} position={[0, -14, -30]} rotation={[0.0, -0.3, 0]} />
          <ringGeometry args={[1, 1.2, 32]} />
          <sphereGeometry args={[0.55, 64, 64]} />
          <Common color={"#efefef"} />
        </Suspense>
      </View>
    </>
  )
}
