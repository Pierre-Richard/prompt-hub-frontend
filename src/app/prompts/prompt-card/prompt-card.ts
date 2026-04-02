import { Component, input } from '@angular/core'
import { Prompt } from '../prompt.model'

@Component({
  selector: 'app-prompt-card',
  imports: [],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  public prompt = input.required<Prompt>()

  public copyToClicpboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
}
