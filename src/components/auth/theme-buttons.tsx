import { LaptopMinimal, Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";

import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

function ThemeButtons() {
  const { setTheme } = useTheme();
  return (
    <ToggleGroup onValueChange={setTheme} type="single">
      <ToggleGroupItem value="system" aria-label="System">
        <LaptopMinimal className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Light">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export default ThemeButtons;
