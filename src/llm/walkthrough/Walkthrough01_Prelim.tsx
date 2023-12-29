import React from 'react';
import { Phase } from "./Walkthrough";
import { commentary, embed, IWalkthroughArgs, setInitialCamera } from "./WalkthroughTools";
import s from './Walkthrough.module.scss';
import { Vec3 } from '@/src/utils/vector';

let minGptLink = 'https://github.com/karpathy/minGPT';
let pytorchLink = 'https://pytorch.org/';
let andrejLink = 'https://karpathy.ai/';
let zeroToHeroLink = 'https://karpathy.ai/zero-to-hero.html';

export function walkthrough01_Prelim(args: IWalkthroughArgs) {
    let { state, walkthrough: wt } = args;

    if (wt.phase !== Phase.Intro_Prelim) {
        return;
    }

    setInitialCamera(state, new Vec3(184.744, 0.000, -636.820), new Vec3(296.000, 16.000, 13.500));

    let c0 = commentary(wt, null, 0)`
알고리즘의 복잡성에 대해 알아보기 전에 간단히 살펴보겠습니다.

이 가이드는 훈련이 아닌 추론에 초점을 맞추고 있으며, 따라서 전체 기계 학습 과정의 일부에 불과합니다.
우리의 경우 모델의 가중치가 사전 훈련되었으며, 우리는 추론 과정을 사용하여 출력을 생성합니다. 이것은 브라우저에서 직접 실행됩니다.

여기에서 보여지는 모델은 GPT (generative pre-trained transformer) 패밀리의 일부입니다. 이는 "context-based token predictor"로 설명할 수 있습니다.
OpenAI는 2018년에 이 패밀리를 소개했으며, GPT-2, GPT-3, GPT-3.5 Turbo와 같은 주목할 만한 구성원을 가지고 있습니다. 후자는 널리 사용되는 ChatGPT의 기초입니다.
GPT-4와 관련이 있을 수도 있지만, 구체적인 세부 사항은 알려져 있지 않습니다.

이 가이드는 ${embedLink('PyTorch', pytorchLink)}에서 만든 ${embedLink('minGPT', minGptLink)} GitHub 프로젝트에서 영감을 얻었습니다.
${embedLink('Andrej Karpathy', andrejLink)}의 유튜브 시리즈 ${embedLink("Neural Networks: Zero to Hero", zeroToHeroLink)}와 minGPT 프로젝트는 이 가이드를 만드는 데 있어서
매우 중요한 자료였습니다. 여기에 소개된 작은 크기의 모델은 minGPT 프로젝트에서 찾을 수 있는 모델을 기반으로 합니다.

그럼 이제 시작합니다. 
`;

}

export function embedLink(a: React.ReactNode, href: string) {
    return embedInline(<a className={s.externalLink} href={href} target="_blank" rel="noopener noreferrer">{a}</a>);
}

export function embedInline(a: React.ReactNode) {
    return { insertInline: a };
}


// Another similar model is BERT (bidirectional encoder representations from transformers), a "context-aware text encoder" commonly
// used for tasks like document classification and search.  Newer models like Facebook's LLaMA (large language model architecture), continue to use
// a similar transformer architecture, albeit with some minor differences.
