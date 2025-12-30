const lenis = new Lenis({
  duration: 0.5,      // 慣性の持続時間（長すぎると重すぎる）
  easing: t => t,     // 線形、自然な滑らかさ
  lerp: 0.05,         // 小さめの追従速度、ほんのちょっと重め
  smooth: true,       // スムーズスクロールを有効
  direction: 'vertical'
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);

