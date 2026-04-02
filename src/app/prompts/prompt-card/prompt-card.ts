import { Component, input } from '@angular/core'
import { Prompt } from '../prompt.model'
import { Button } from 'primeng/button'
import { Textarea } from 'primeng/textarea'
import { Tag } from 'primeng/tag'
import { Card } from 'primeng/card'

@Component({
  selector: 'app-prompt-card',
  imports: [Button, Textarea, Tag, Card],
  templateUrl: './prompt-card.html',
  styleUrl: './prompt-card.scss',
})
export class PromptCard {
  public prompt = input.required<Prompt>()

  public copyToClicpboard() {
    void navigator.clipboard.writeText(this.prompt().content)
  }
}
