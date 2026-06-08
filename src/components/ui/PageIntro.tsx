import PageHero from './PageHero'

type PageIntroProps = {
  copy: string
  eyebrow: string
  title: string
}

function PageIntro({ copy, eyebrow, title }: PageIntroProps) {
  return (
    <main className="pt-unit-16">
      <PageHero
        copy={copy}
        eyebrow={eyebrow}
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCqyQ-ROftUZoUtitm4x0hjdDRQU71hVpMTwcj8U7zS1w2XIGBmqQRLyYXyCOVYHD81YWZDj-zQxtFIJIf5DSTlsUpCE2qTakrXGvKUTaE4GIyDAk8mP7SGXHL-HHG-0mfCK_369XufLn8VT8SP9TbKJE8GOov3YBbbhMTjfEzto4e-TAfmpz0TsMpemXAiTZBtJM6KuwTnrRnwTs3AIUPL65iI2D3pUr9DyUjDG-dQaOO9CAxUSfoRumTciZzEG31SWJ5VI6llDdjN"
        title={title}
      />
    </main>
  )
}

export default PageIntro
