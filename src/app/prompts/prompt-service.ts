import { inject, Injectable } from '@angular/core'
import { Prompt } from './prompt.model'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class PromptService {
  httpClient = inject(HttpClient)
  baseUrl = environment.apiUrl + 'prompts'

  public getPrompts(): Observable<Prompt[]> {
    return this.httpClient.get<Prompt[]>(this.baseUrl)
  }
}
