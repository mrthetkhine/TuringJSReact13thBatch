'use client';
import ProblematicComp from "@/app/components/ProblematicComp";
import ErrorBoundary from "@/util/ErrorBoundary";

export default function ErrorBoundaryDemo()
{
    return(<div>
        <ErrorBoundary>
            <ProblematicComp />
        </ErrorBoundary>

    </div>);
}