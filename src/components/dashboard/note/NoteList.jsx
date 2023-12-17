import React, { useEffect } from "react";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "../../../store/actions/note.js";

import { Note } from "./Note.jsx";

export function NoteList() {
    const {
        pending,
        notes: data,
        hasNext,
        search,
    } = useSelector((state) => state.notes);

    const dispatch = useDispatch();

    const allRows = data ? data : [];

    const parentRef = React.useRef();

    const rowVirtualizer = useVirtualizer({
        count: hasNext ? allRows.length + 1 : allRows.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 60,
        overscan: 5,
    });

    useEffect(() => {
        dispatch(getNotes());
    }, [search]);

    useEffect(() => {
        const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

        if (!lastItem) {
            return;
        }

        if (lastItem.index >= allRows.length - 1 && hasNext && !pending) {
            dispatch(getNotes());
        }
    }, [hasNext, allRows.length, pending, rowVirtualizer.getVirtualItems()]);

    return (
        <div
            ref={parentRef}
            style={{
                height: `100%`,
                overflow: "auto",
            }}
        >
            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: "100%",
                    position: "relative",
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const isLoaderRow = virtualRow.index > allRows.length - 1;

                    const style = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${virtualRow.size}px`,
                        transform: `translateY(${virtualRow.start}px)`,
                    };

                    const note = allRows[virtualRow.index];

                    return !isLoaderRow ? (
                        <Note
                            key={virtualRow.index}
                            note={note}
                            style={style}
                        ></Note>
                    ) : null;
                })}
            </div>
        </div>
    );
}
