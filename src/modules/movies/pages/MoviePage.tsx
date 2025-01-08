import { NavTopper } from "../../../shared/components"
import { Navbar } from "../../../shared/components/Navbar"
import { HomeLayout } from "../../../shared/layouts"

export const MoviePage = () => {
  return (
    <HomeLayout>
      <NavTopper />
      <Navbar />
    </HomeLayout>
  )
}
