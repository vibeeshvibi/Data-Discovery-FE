import { LastRefreshSection } from '@/components/features/LastRefreshSection';
import { LineageFilter } from '@/components/features/LineageFilter';
import { ReactFlowComponent } from '@/components/features/ReactFlow';

export function Lineage() {
  return (
    <div className="h-full p-4 mt-8 bg-background">
      <div className="mb-6 flex gap-[6rem] items-start">
        <div>
          <h1 className="text-2xl font-bold text-[var(--brand-secondary)] font-['UnileverDesirebold']">Lineage</h1>
          <div className='pt-2'>
            <LastRefreshSection />
          </div>
        </div>
        <LineageFilter />
      </div>
      <div className="h-[550px] w-full border border-border/50 rounded-xl ">
        <ReactFlowComponent />
      </div>
    </div>
  );
}
