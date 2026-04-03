import { Component, inject } from '@angular/core'
import { Prompt } from '../prompt.model'
import { AsyncPipe, CommonModule } from '@angular/common'
import { PromptCard } from '../prompt-card/prompt-card'
import { PromptService } from '../prompt-service'

@Component({
  selector: 'app-prompt-list',
  imports: [CommonModule, PromptCard, AsyncPipe],
  templateUrl: './prompt-list.html',
  styleUrl: './prompt-list.scss',
})
export class PromptList {
  prompService = inject(PromptService)

  prompts$ = this.prompService.getPrompts()
}
