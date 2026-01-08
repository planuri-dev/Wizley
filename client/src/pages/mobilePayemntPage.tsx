export default function MobilePaymentPage() {
  return (
    <div
        className="min-h-screen bg-background font-pretendard
                   flex flex-col items-center
                   px-4 text-center pt-24 sm:pt-32"
        data-testid="mobile-payment-page"
    >
        <strong className="block text-2xl sm:text-3xl font-bold text-center text-[#9399A2]">
          결제 처리 중입니다.
        </strong>

        <span className="mt-3 text-sm sm:text-base text-muted-foreground text-[#9399A2]">
          결제가 완료될 때까지 잠시만 기다려 주세요.
        </span>

    </div>

  );
}
