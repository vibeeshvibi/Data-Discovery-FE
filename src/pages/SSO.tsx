import { Button } from "../components/ui/button";

export function SSO() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-pink-100 to-yellow-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md mx-auto text-center ">
                <div className="flex items-center justify-center gap-4">
                    <img
                        src="/src/assets/icons/Unilever_text_logo.svg"
                        alt="Unilever Text Logo"
                        className="h-7"
                    />
                    <div className="h-10 w-[2px] bg-[var(--brand-primary)]"></div>
                    <div className="flex gap-2 justify-center items-center">
                        <img
                            src="/src/assets/icons/logo-text.svg"
                            alt="Logo Text"
                            className="h-8 w-8"
                        />
                        <div className="text-start leading-none">
                            <p className="text-sm font-bold text-[var(--brand-primary)]">
                                Data
                            </p>
                            <p className="text-sm font-bold text-[var(--brand-primary)]" style={{marginTop:"-5px"}}>
                                Discovery
                            </p>
                        </div>

                    </div>
                </div>


                <p className="text-lg text-[var(--brand-primary)] mt-5">
                    Login to your data discovery account
                </p>
                <p className="text-sm text-[var(--brand-primary)] mt-2">
                    Use one-click login
                </p>
                <div className="mt-6">
                    <Button
                        className="w-[60%] font-['UnileverDesirebold'] bg-transparent border-[var(--brand-primary)] text-[var(--brand-primary)] hover:text-[var(--brand-primary)] hover:bg-transparent"
                        variant="outline"
                    >
                        Continue with Unilever ID
                    </Button>
                </div>
            </div>
        </div>
    );
}
