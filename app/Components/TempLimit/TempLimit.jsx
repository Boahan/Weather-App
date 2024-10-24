import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import * as React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
   

const TempLimit = () => {

    
  const [position, setPosition] = React.useState("bottom")

    const onSubmit = (data) => {
        //empty
      };



  return (
    <>
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit Threshold</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Set Threshold</SheetTitle>
          <SheetDescription>
            Please comfigure your threshold here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>

        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="items-center"><Button variant="outline" >Select Domain</Button></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Temperature</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Wind</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Humidity</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      </DropdownMenu>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Lower Limit
            </Label>
            <Input id="name" value=" 3°C " className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Upper Limit
            </Label>
            <Input id="username" value=" 32°C " className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
            
        <Button type="submit">Reset</Button>
          <SheetClose asChild>
            <Button type="submit">Save</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default TempLimit

